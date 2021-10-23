class Event:
    location = ""
    participants = []
    startTime = ''
    endTime = ''

    def __init__(self, location, participants, startTime, endTime):
        self.location = location
        self.particpants = participants
        self.startTime = startTime
        self.endTime = endTime