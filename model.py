import calendar


class Evento(object):
    def __init__(self, name, date, bands, pic, text):
        super(Evento, self).__init__()
        self.name = name
        self.date = date
        self.month = calendar.month_name[self.date.month]
        self.bands = bands
        self.pic = pic
        self.text = text
