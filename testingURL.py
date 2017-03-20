import re
url = "https://d2l.ucalgary.ca/d2l/le/content/156449/Home"
url = url.replace('/', '').replace('.', '').replace(':','')
print url
print (re.findall(r'\d+', url))
