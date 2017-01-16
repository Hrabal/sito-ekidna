import os
from flask import Flask, url_for, render_template, jsonify, request
from datetime import datetime
import locale
locale.setlocale(locale.LC_ALL, 'it_IT')

from model import Evento, eventi

app = Flask(__name__)
app.config.from_object(__name__)
app.config.from_envvar('FLASKR_SETTINGS', silent=True)

@app.route('/')
def index():
    bgs_path = os.path.join(app.static_folder, 'img', 'bgs')
    bgs = list(filter(lambda x: x.endswith('.jpg'), os.listdir(bgs_path)))
    return render_template('base.html', bgs=bgs)


@app.route('/paginator')
def change_page():
    pag = request.args.get('pagina', 'wrong call', type=str)
    data = {}
    if pag == 'programma':
        data['eventi'] = [Evento(nome, data, bands, pic, text, fb_link) for nome, data, bands, pic, text, fb_link in eventi]
        data['eventi_passati'] = [Evento(nome, data, bands, pic, text, fb_link) for nome, data, bands, pic, text, fb_link in eventi]
    if pag == 'gallery':
        gallery_path = os.path.join(app.static_folder, 'img', 'gallery')
        data['foto'] = list(filter(lambda x: x.endswith('.jpg'), os.listdir(gallery_path)))
    if pag == 'rottura':
        gallery_path = os.path.join(app.static_folder, 'img', 'rottura')
        data['locandine'] = list(filter(lambda x: x.endswith('.jpg'), os.listdir(gallery_path)))
        data['last'] = data['locandine'][-1]
    return render_template(pag + '.html', data=data)

if __name__ == '__main__':
    app.run(debug=True)
