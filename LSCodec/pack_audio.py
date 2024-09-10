import re
import shutil
import os

def extract_audio_paths(file_path):
    # Define the pattern to match file paths like './audio/*.wav'
    pattern = r'\./audio/[\-/a-zA-Z_0-9]+\.wav'
    audio_paths = []

    # Open the file and read it line by line
    with open(file_path, 'r') as file:
        for line in file:
            # Find all occurrences of the pattern in the line
            matches = re.findall(pattern, line)
            # Append each match to the list
            audio_paths.extend(matches)

    return audio_paths

file_path = 'index.html'
paths = extract_audio_paths(file_path)
print(len(paths))
print(paths)
# exit(1)
for p in paths:
    assert p.startswith('./audio/')
    rest = p[len('./audio/'):]
    new_p = "./audio_ready/" + rest
    dirname = os.path.dirname(new_p)
    print(dirname)
    os.makedirs(dirname, exist_ok=True)
    shutil.copy(p, new_p)

