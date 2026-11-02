<?php
// Hostinger PHP/HTML websites often prefer index.php as the document root.
$html = __DIR__ . '/index.html';
if (is_file($html)) {
  header('Content-Type: text/html; charset=UTF-8');
  readfile($html);
  exit;
}

http_response_code(404);
echo 'Site files are missing. Upload the contents of the out/ folder to public_html.';
