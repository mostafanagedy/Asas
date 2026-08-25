import glob
import re

files = glob.glob("*.html")

pattern = re.compile(r'<a href="#"\s*class="footer-logo">Furni<span>\.</span></a>', re.IGNORECASE | re.MULTILINE)
replacement = '<a href="index.html" class="footer-logo"><img src="images/logo.png" alt="أساس - Asas" style="height: 55px; width: auto;"></a>'

for f in files:
    with open(f, 'r', encoding='utf-8') as file:
        content = file.read()
    
    if pattern.search(content):
        content = pattern.sub(replacement, content)
        with open(f, 'w', encoding='utf-8') as file:
            file.write(content)
            
print("Footer replacement complete.")
