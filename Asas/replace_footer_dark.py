import glob

files = glob.glob("*.html")

for f in files:
    with open(f, 'r', encoding='utf-8') as file:
        content = file.read()
    
    # Target only the footer logo link
    old_tag = '<a href="index.html" class="footer-logo"><img src="images/logo.png" alt="أساس - Asas" style="height: 55px; width: auto;"></a>'
    new_tag = '<a href="index.html" class="footer-logo"><img src="images/logo-dark.png" alt="أساس - Asas" style="height: 55px; width: auto;"></a>'
    
    if old_tag in content:
        content = content.replace(old_tag, new_tag)
        with open(f, 'w', encoding='utf-8') as file:
            file.write(content)

print("Footer dark logo replacement complete.")
