#!/usr/bin/env python3
import http.server
import socketserver
import os
import json
import urllib.parse
from datetime import datetime

PORT = 8000
ROOT_DIR = r'c:\Users\CHELUVEGOWDA\OneDrive\Desktop\company website'
os.chdir(ROOT_DIR)

class ContactRequestHandler(http.server.SimpleHTTPRequestHandler):
    def _set_headers(self, status_code=200, content_type='application/json'):
        self.send_response(status_code)
        self.send_header('Content-Type', content_type)
        self.send_header('Access-Control-Allow-Origin', '*')
        self.end_headers()

    def do_OPTIONS(self):
        self.send_response(200)
        self.send_header('Access-Control-Allow-Origin', '*')
        self.send_header('Access-Control-Allow-Methods', 'POST, OPTIONS')
        self.send_header('Access-Control-Allow-Headers', 'Content-Type')
        self.end_headers()

    def do_POST(self):
        if self.path != '/submit':
            return super().do_POST()

        content_length = int(self.headers.get('Content-Length', 0))
        raw_body = self.rfile.read(content_length).decode('utf-8')
        content_type = self.headers.get('Content-Type', '')

        if 'application/json' in content_type:
            payload = json.loads(raw_body)
        else:
            payload = urllib.parse.parse_qs(raw_body)
            payload = {k: v[0] if isinstance(v, list) else v for k, v in payload.items()}

        message_data = {
            'timestamp': datetime.utcnow().isoformat() + 'Z',
            'name': payload.get('name', '').strip(),
            'email': payload.get('email', '').strip(),
            'message': payload.get('message', '').strip()
        }

        if not message_data['name'] or not message_data['email'] or not message_data['message']:
            self._set_headers(400)
            self.wfile.write(json.dumps({'message': 'Please fill in all required fields.'}).encode('utf-8'))
            return

        try:
            with open('messages.txt', 'a', encoding='utf-8') as f:
                f.write(json.dumps(message_data, ensure_ascii=False) + '\n')
        except OSError as exc:
            self._set_headers(500)
            self.wfile.write(json.dumps({'message': 'Unable to save message.'}).encode('utf-8'))
            return

        self._set_headers(200)
        self.wfile.write(json.dumps({'message': 'Thank you for your message! We will get back to you soon.'}).encode('utf-8'))


with socketserver.TCPServer(("", PORT), ContactRequestHandler) as httpd:
    print(f"Server running at http://localhost:{PORT}/")
    print("Open this URL in your browser to view your website.")
    print("Press Ctrl+C to stop the server.")
    httpd.serve_forever()
