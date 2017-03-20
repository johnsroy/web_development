### NEW FILE #####
testList = [("00:00-01:00", 123), ("01:00-01:05", 456), ("01:06-02:01", 545)]

from collections import OrderedDict

stat = OrderedDict()

for item in testList:
    if item[0][:2] not in stat:
        stat[item[0][:2]] = item[1]
    else:
        stat[item[0][:2]] += item[1]

print stat

for item in stat.items():
    print item
