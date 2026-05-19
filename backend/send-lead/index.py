import os
import json
import urllib.request

def handler(event: dict, context) -> dict:
    """Отправляет заявку с сайта КатаСкупка в Telegram-бот. v2"""

    if event.get('httpMethod') == 'OPTIONS':
        return {
            'statusCode': 200,
            'headers': {
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Methods': 'POST, OPTIONS',
                'Access-Control-Allow-Headers': 'Content-Type',
                'Access-Control-Max-Age': '86400'
            },
            'body': ''
        }

    body = json.loads(event.get('body', '{}'))
    name = body.get('name', '').strip()
    phone = body.get('phone', '').strip()
    car = body.get('car', '').strip()
    comment = body.get('comment', '').strip()

    if not name or not phone:
        return {
            'statusCode': 400,
            'headers': {'Access-Control-Allow-Origin': '*'},
            'body': '{"error": "required"}'
        }

    lines = [
        '🔥 *Новая заявка с сайта КатаСкупка*',
        '',
        f'👤 *Имя:* {name}',
        f'📞 *Телефон:* {phone}',
    ]
    if car:
        lines.append(f'🚗 *Автомобиль:* {car}')
    if comment:
        lines.append(f'💬 *Комментарий:* {comment}')

    text = '\n'.join(lines)

    token = os.environ['TELEGRAM_BOT_TOKEN']
    chat_id = os.environ['TELEGRAM_CHAT_ID']

    url = f'https://api.telegram.org/bot{token}/sendMessage'
    payload = json.dumps({
        'chat_id': chat_id,
        'text': text,
        'parse_mode': 'Markdown'
    }).encode('utf-8')

    req = urllib.request.Request(url, data=payload, headers={'Content-Type': 'application/json'})
    urllib.request.urlopen(req)

    return {
        'statusCode': 200,
        'headers': {'Access-Control-Allow-Origin': '*'},
        'body': json.dumps({'ok': True})
    }