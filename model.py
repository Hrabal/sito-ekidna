

class Evento(object):
    def __init__(self, name, date, bands, pic):
        super(Evento, self).__init__()
        self.name = name
        self.date = date
        self.bands = bands
        self.pic = pic
