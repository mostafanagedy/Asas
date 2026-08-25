import glob

files = glob.glob("*.html")

for f in files:
    if f in ['login.html', 'register.html', 'index.html']:
        continue
    
    with open(f, 'r', encoding='utf-8') as file:
        content = file.read()
    
    # Replace favicon
    content = content.replace('<link rel="shortcut icon" href="favicon.png">', '<link rel="shortcut icon" href="images/logo.png">')
    
    # Replace title
    content = content.replace('<title>قالب فيرني المجاني من تصميم Untree.co </title>', '<title>أساس - Asas</title>')
    content = content.replace('<title>قالب فيرني المجاني من تصميم Untree.co</title>', '<title>أساس - Asas</title>')
    
    # Replace navbar brand
    content = content.replace('<a class="navbar-brand" href="index.html">Furni<span>.</span></a>', 
                              '<a class="navbar-brand" href="index.html">\n\t\t\t\t\t<img src="images/logo.png" alt="أساس - Asas" style="height: 55px; width: auto;">\n\t\t\t\t</a>')
    
    with open(f, 'w', encoding='utf-8') as file:
        file.write(content)
        
print("Replacement complete.")
