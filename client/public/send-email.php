<?php
header('Content-Type: application/json; charset=utf-8');
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type');

if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit;
}

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode(['success' => false, 'message' => 'Método não permitido']);
    exit;
}

// ─── CONFIGURAÇÃO ──────────────────────────────────────────────
$destinatario = 'contato@vbtech.com.br'; // e-mail que receberá os contatos
// ───────────────────────────────────────────────────────────────

$input = file_get_contents('php://input');
$data  = json_decode($input, true);

$name    = trim(strip_tags($data['name']    ?? ''));
$email   = trim(strip_tags($data['email']   ?? ''));
$phone   = trim(strip_tags($data['phone']   ?? ''));
$message = trim(strip_tags($data['message'] ?? ''));

if (empty($name) || empty($email) || empty($message)) {
    http_response_code(400);
    echo json_encode(['success' => false, 'message' => 'Campos obrigatórios faltando']);
    exit;
}

if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
    http_response_code(400);
    echo json_encode(['success' => false, 'message' => 'E-mail inválido']);
    exit;
}

$assunto = '=?UTF-8?B?' . base64_encode('Novo contato pelo site – ' . $name) . '?=';

$corpo  = "Você recebeu um novo contato pelo site vbtech.com.br\n\n";
$corpo .= "Nome.....: $name\n";
$corpo .= "E-mail...: $email\n";
$corpo .= "Telefone.: $phone\n\n";
$corpo .= "Mensagem:\n$message\n";

$headers  = "From: Site VB Tech <$destinatario>\r\n";
$headers .= "Reply-To: $email\r\n";
$headers .= "MIME-Version: 1.0\r\n";
$headers .= "Content-Type: text/plain; charset=UTF-8\r\n";
$headers .= "Content-Transfer-Encoding: 8bit\r\n";
$headers .= "X-Mailer: PHP/" . phpversion() . "\r\n";

$enviado = mail($destinatario, $assunto, $corpo, $headers);

if ($enviado) {
    echo json_encode(['success' => true, 'message' => 'Mensagem enviada com sucesso']);
} else {
    http_response_code(500);
    echo json_encode(['success' => false, 'message' => 'Erro ao enviar. Tente pelo WhatsApp.']);
}
