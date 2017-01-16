import calendar
from datetime import datetime


class Evento(object):
    def __init__(self, name, date, bands, pic, text, fb_link):
        super(Evento, self).__init__()
        self.name = name
        self.date = date
        self.month = calendar.month_name[self.date.month]
        self.bands = bands
        self.pic = pic
        self.text = text
        self.fb_link = fb_link

eventi = [
    ('Riapertura del disagio',
        datetime.strptime('21012017 21:30', '%d%m%Y %H:%M'),
        ['OvO', 'Hate&Merda', 'Champagne!'], 
        '15541394_656750374531022_6664314188233641165_n.jpg', 
        """Dopo 13, lunghi, mesi Associazione Ekidna RIAPRE!!

E lo fa toccandola piano con OvO + Hate & Merda + CHAMPAGNE ruock. 

Apertura porte: 21:30
Inizio live: 22:30
Ingresso: 5 euro + tessera ekidna (la tessera è gratuita)

Quindi, sabato 21 gennaio non prendete altri impegni al di fuori di questo :)

Associazione Ekidna, via Livorno 9, San Martino Secchia di Carpi (Mo)

Nb: L'ingresso è riservato ai soci tesserati Ekidna, ma la bazza è che la nostra tessera è GRATUITA e se non la perdi dura per sempre. 
-----------------------------------------------

OvO

Gli OvO sono da sempre una delle bands più attive del panorama rock rumoroso mondiale. Più di 900 concerti, un numero imprecisabile di uscite discografiche tra album, collaborazioni, singoli, pezzi su compilations, li hanno fatti conoscere ovunque anche per l’originalità della loro proposta. Un duo formato da una piccola e indemoniata cantante – chitarrista (Stefania Pedretti) ed un energumeno che suona una mezza batteria come se fosse il set di un gruppo metal (Bruno Dorella). I loro live leggendari li hanno portati ovunque in Europa, Nord America, Messico, Medio Oriente, Sud Est Asiatico. 
Quello che fanno non è catalogabile in un genere musicale. Non è noise, non è metal, non è doom, non è punk, non è rock and roll, anche se c'è un po' di tutto questo. Certamente non è free né avant né tantomeno impro. Per una volta si può davvero dire che un gruppo sia indefinibile.
Dopo alcuni album sulla loro etichetta Bar La Muerte pubblicano dischi per etichette americane come la leggendaria Load e Blossoming Noise, quindi presso Supernatural Cat per due album, fino alla nuova collaborazione con Dio Drone per il nuovo album “CREATURA”.. 
Hanno collaborato o suonato con alcuni tra i più grandi nomi della musica rock sperimentale contemporanea, ed hanno lavorato anche su sonorizzazioni cinematografiche (Nosferatu, Frankenstein) e col teatro (“Aeneis V”, Teatro Lenz). 
Con “CREATURA” continua e si sviluppa una vena in cui il rock pesante si miscela in modo del tutto naturale ed originale con suoni elettronici, mantenendo gli OvO un oggetto estraneo e misterioso nel panorama mondiale ormai da 18 anni.

DISCOGRAFIA – ALBUM
2016 Creatura (DioDrone) out 09.12.2016 
2013 Abisso (Supernatural Cat)
2011 Cor Cordium (Supernatural Cat)
2008 CroceVia (Load)
2006 Miastenia (Load)
2004 Cicatrici (Bar La Muerte)
2002 Vae Victis (Bar La Muerte)
2001 Assassine (Bar La Muerte)
Collaboration Albums
OvO/Nadja “ The Life and Death of a Wasp” (2010 Bis Aufs Messer)
OvO RMXD by Daniele Brusaschetto (2009 Blossoming Noise) 
OvO/Rollerball “My First Cowboy” (2002 Bar La Muerte)

https://www.facebook.com/OvO666/?fref=ts
http://ovolive.blogspot.it/
https://www.youtube.com/watch?v=sYaYuBG2gF8
--------------------------------------------


Hate & Merda

Abrasivo progetto a due ridotto all'essenziale [batteria e chitarra / voce], volti coperti da impenetrabili calze nere, alto volume e inquieto terrorismo sonoro.
Il primo album degli Hate & Merda, L'Anno Dell'Odio, esce a Novembre 2013 preceduto da una manciata di concerti sparsi per la penisola in cui i due senza-faccia rivelano le proprie influenze hardcore, noise ma anche ambient accompagnate da testi in italiano diretti e senza censura.
Non c'è provocazione né messinscena alcuna. Le calze nere annullano l'identità, concetto contrapposto all'egotismo da social network. Nome, lineamenti e aspetto di chi sta suonando non sono importanti, non sono necessari.
Il disco ottiene un'ottima risposta tra recensioni e live. L'Anno Dell'Odio viene portato in tutta Italia e infine al Pukkelpop Festival 2015 in Belgio. 
Il nuovo album, La Capitale Del Male, vede la luce a Gennaio 2016 prodotto e distribuito da una cordata di etichette cardine del panorama underground nostrano, ed ospita la partecipazione di Stefania Pedretti [OvO / ?Alos] e Matteo Bennici.

[ link video ]
Pioggia Di Cicatrici E Sogni Negati / official clip:
> https://www.youtube.com/watch?v=crlLA0CLCJs
L'Eternità Di Un'Estate Terribile / live Pukkelpop Festival 2015:
> https://www.youtube.com/watch?v=JKJ7QkxlHn0
In Itinere / official clip:
> https://www.youtube.com/watch?v=Nkevc_vNrY0

[ link streaming / download ]
> https://diodrone.bandcamp.com/album/lanno-dellodio
> https://diodrone.bandcamp.com/album/la-capitale-del-male

[ pagina FB ]
https://www.facebook.com/odioeshit/

[ contatti ]
diodrone@mail.com
nariqube@yahoo.it
----------------------------------------------

CHAMPAGNE ruock

Noise-rock sgangherato, sempre fuori contesto dal 2012. 
Volumi altissimi e feedback costante. 
Fortunatamente suonano circa 15 minuti e poi basta. 

https://www.facebook.com/champagneaiz/
https://champagneistkrieg.bandcamp.com/""",
        'https://www.facebook.com/events/568318273359501/'),
    ('Conca del disagio 1',
     datetime.strptime('28012017 21:00', '%d%m%Y %H:%M'),
     ['Ornaments', 'End Of A Season', 'Amalienborg'],
     '15400490_656751104530949_9055249812919096358_n.jpg',
     """Sabato 28 gennaio 2017
CONCA DEL DISAGIO 1 con:
Ornaments
End of a Season
amalienborg \ am.alien.borg

Apertura porte: 21:30
Inizio concerti: 22:30
Ingresso: 5 euro + tessera ekidna (la tessera è gratuita)

Associazione Ekidna, via Livorno 9, San Martino Secchia di Carpi (Mo)

Nb: L'ingresso è riservato ai soci tesserati Ekidna, ma la bazza è che la nostra tessera è GRATUITA e se non la perdi dura per sempre. 
-------------------------------------------
Ornaments : Nascono nell’ormai lontano 2003 dal sodalizio di alcuni musicisti gravitanti da tempo in formazioni seminali per lo screamo/post-hardcore italiano del periodo: Hangin’ on a Thread, The Death of Anna Karina e 7 Note in nero. Il nome del progetto è tratto da un brano dei Rorschach: band tra le più geniali e misconosciute dell’underground musicale in cui gli Ornaments affondano le loro radici. In anni in cui il concetto di “post-rock/metal” strumentale non è ancora particolarmente diffuso, o praticato, gli Ornaments decidono di dedicarsi alla composizione di musica senza voce, ispirandosi al sound pesante e sinistro di band come Neurosis, Breach ed Isis.

Il primo demo autoprodotto (s/t – 2004) viene distribuito in oltre 1000 copie direttamente ai concerti. Grazie al passaparola suscitato dall’intensità dei live, capaci di interpolare momenti di pura aggressione sonora con dense sospensioni meditative, la band riesce a consolidare rapidamente la propria reputazione. Nel corso dei due anni successivi il nome Ornaments gode, difatti, di un’ampia diffusione, facendosi conoscere sia agli addetti ai lavori che alla più ampia platea dei cultori della musica sperimentale. Nel frattempo gli Ornaments si dedicano ad un’intensa attività live, calcando il palco assieme a band di culto come Converge, Daughters, Playing Enemy e Red Sparrowes e suonando decine di concerti sia in Italia che all’estero.

Nel 2006 il progetto subisce una battuta di arresto ed è solamente a distanza di quattro anni che gli Ornaments decidono di riattivarlo. Il secondo demo autoprodotto riaccende l’attenzione nei loro riguardi, raccogliendo delle ottime recensioni. Dopo un periodo di attività live – tra cui il tour europeo con Valerian Swings e l’apertura per il live dei Pelican al Magnolia di Milano – gli Ornaments incidono il primo full lenght: Pneumologic (Tannen Records/Sangue Dischi/Escape From Today/Blinde Proteus – 2013).

Ispirato al concetto di “Pneuma” – antichissima pratica di medicina esoterica Pneumologic rappresenta la summa della ricerca pluriennale della band e s’avvale di diverse collaborazioni: la jazz-singer Silvia Donati, Tommaso Garavini (Concrete, Si no Sedes Is), il pluristrumentista Daniele Rossi e, last but not least, del concept grafico di Luca Zampriolo (in arte Kallamity), artista tra i più noti ed apprezzati in ambito mecha-design/steam punk.

Pneumologic ottiene degli ottimi riscontri sia nelle riviste che nei portali specializzati. Dal disco verrà estratto il singolo Aer, accompagnato dall’omonimo video prodotto da Shiroppo Film Studio con la regia di Matteo Masali. Dopo Pneumologic gli Ornaments riprendono coi live esibendosi, nel corso del biennio successivo, in oltre cinquanta concerti tra festival di spicco – come il Full Tension (Deftones, Architects, Teatro degli Orrori), ed il Solo Macello – le date europee con i Lento e le aperture per Scott Kelly &amp; the Family Home ed Alcest. In questo periodo gli Ornaments alternano ai live set “classici” i visual-set appositamente curati per loro dall’artista Colette Baraldi.

Nel 2015 esce il Metamorpho Split (Tannen Records) ispirato alle visioni di M. C. Escher. Si tratta di un album incisivo e fulminante in cui gli Ornaments si sfidano a duello con il duo grind-experimental degli Zeus! (Luca Cavina e Paolo Mongardi). L’uscita dello split è accompagnata da una serie di concerti (tra cui la data con gli Ufomammuth al Bronson) che culminano nella partecipazione degli Ornaments al Dunk Festival! di Zottegem (BG), probabilmente il maggior festival di riferimento per tutti gli appassionati di Post Rock/Metal.

Nel 2016 gli Ornaments annunciano alcune novità: l’inizio della collaborazione con il booking agent Ben Tellarini, l’ingresso nel roster INRI, il lancio in digiale dell’EP Cymatic, accompagnato da un nuovo video di Matteo Masali/Taumathrope, e l’imminente registrazione di un nuovo full lenght, intitolato "Drama".
------------------------------------------

End of a Season: da Reggio Emilia, post-hardcore cupissimo e nerissimo. 

------------------------------------------

amalienborg \ am.alien.borg: da Reggio Emilia, noise power duo con gente dei ritual droners Dolpo. Space is the place.""",
     'https://www.facebook.com/events/1128906660511808/'),
    ('Conca Del Disagio 2 - Grind & Core edition',
     datetime.strptime('04022017 21:00', '%d%m%Y %H:%M'),
     ['Buffalo Grillz', 'Dysmorfic', 'Blood of Seklusion'],
     '15776878_670229893183070_4700513618653604677_o.jpg',
     """Sabato 04 febbraio 2017
Conca Del Disagio 2 - Grind & Core edition
con:
Buffalo Grillz
Dysmorfic
Blood of Seklusion

Ingresso: 5 euro + tessera ekidna (la tessera è gratuita)

Associazione Ekidna, via Livorno 9, Carpi (Mo)

Nb: L'ingresso è riservato ai soci tesserati Ekidna, ma la bazza è che la nostra tessera è GRATUITA e se non la perdi dura per sempre.""",
     'https://www.facebook.com/events/371829176513940/'),
    ('Nebbie Pagane Fest',
     datetime.strptime('25022017 21:00', '%d%m%Y %H:%M'),
     ['Jonestown Kids', 'Hyle', 'Shitty Life', 'Siege Stompers', 'tba', 'tba'],
     '15977207_675216352684424_978147029194066855_n.jpg',
     """Festivalino hc
6 gruppi / 2 sale
Associazione Ekidna, via Livorno 9, San Martino Secchia di Carpi (Mo)""",
     'https://www.facebook.com/events/1356144221084157/'),
    ]
