
import datetime
microsecond = datetime.datetime.now().microsecond

if microsecond % 2 == 0:
    microsecond *= microsecond % 100
else:
    microsecond *= microsecond % 500

print(microsecond)
