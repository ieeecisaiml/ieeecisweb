import os
import glob

replacements = {
    "June 22–27, 2026": "Sept 26–Oct 1, 2026",
    "June 22-27, 2026": "Sept 26-Oct 1, 2026",
    "June 22": "Sept 26",
    "June 23": "Sept 27",
    "June 24": "Sept 28",
    "June 25": "Sept 29",
    "June 26": "Sept 30",
    "June 27": "Oct 1",
    "Late June": "Late September",
    "June 15": "Sept 15",
    "June 5": "Sept 5"
}

files = glob.glob("**/*.ts", recursive=True) + glob.glob("**/*.tsx", recursive=True) + glob.glob("public/manifest.json")

for file in files:
    if "node_modules" in file or ".next" in file:
        continue
    with open(file, 'r', encoding='utf-8') as f:
        content = f.read()
    
    new_content = content
    for old, new in replacements.items():
        new_content = new_content.replace(old, new)
        
    if new_content != content:
        with open(file, 'w', encoding='utf-8') as f:
            f.write(new_content)
        print(f"Updated {file}")
