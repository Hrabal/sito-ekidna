import os
from flask import Flask, url_for, render_template, jsonify, request
from datetime import datetime
import itertools
from pprint import pformat as pf

from model import Evento

app = Flask(__name__)
app.config.from_object(__name__)
app.config.from_envvar('FLASKR_SETTINGS', silent=True)

eventi = [
    ('Riapertura Ekidna <br> Riapertura del disagio', datetime.strptime('21012017 21:30', '%d%m%Y %H:%M'), ['OvO', 'Hate&Merda', 'Champagne!'], '15541394_656750374531022_6664314188233641165_n.jpg'),
    ('Conca del disagio 1', datetime.strptime('28012017 21:00', '%d%m%Y %H:%M'), ['Ornaments', 'End Of A Season', 'Amalienborg'], '15400490_656751104530949_9055249812919096358_n.jpg')]


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
        data['eventi'] = [Evento(nome, data, bands, pic) for nome, data, bands, pic in eventi]
        print(pf(data))
    if pag == 'gallery':
        gallery_path = os.path.join(app.static_folder, 'img', 'gallery')
        data['foto'] = list(filter(lambda x: x.endswith('.jpg'), os.listdir(gallery_path)))
    return render_template(pag + '.html', data=data)

if __name__ == '__main__':
    app.run(debug=True)