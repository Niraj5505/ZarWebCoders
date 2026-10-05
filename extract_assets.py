import os
from PIL import Image

hp = Image.open('reference/reference-homepage.png')
about = Image.open('reference/reference-about.png')

os.makedirs('public/assets', exist_ok=True)

# 1. Logo crop (around x=120..260, y=20..55)
# Let's inspect logo
logo_crop = hp.crop((125, 22, 260, 56))
logo_crop.save('public/assets/logo-full.png')

# 2. Hero Visual (right side of hero, laptop + cubes)
# x: ~480..890, y: ~75..300
hero_visual = hp.crop((480, 75, 890, 310))
hero_visual.save('public/assets/hero-blockchain.png')

# 3. Developer at desk (Expertise section)
# x: ~460..890, y: ~370..550
dev_desk = hp.crop((460, 370, 890, 545))
dev_desk.save('public/assets/dev-workstation.png')

# 4. Team collaboration (Built for Clarity section)
# x: ~130..470, y: ~680..875
team_collab = hp.crop((130, 680, 470, 875))
team_collab.save('public/assets/team-collab.png')

# 5. Team member portraits (Our Team)
# Three cards:
# y is around 1180..1300
# let's crop the whole team area first to inspect
team_row = hp.crop((320, 1200, 710, 1300))
team_row.save('public/assets/team-row.png')

# Individual portraits from homepage and about page
# In homepage:
# Member 1 (Abuzar):
p1 = hp.crop((330, 1205, 445, 1295))
p1.save('public/assets/team-abuzar.png')
# Member 2 (Rizwana):
p2 = hp.crop((460, 1205, 575, 1295))
p2.save('public/assets/team-rizwana.png')
# Member 3 (Tufail):
p3 = hp.crop((588, 1205, 703, 1295))
p3.save('public/assets/team-tufail.png')

# 6. Case studies / Recent projects thumbnails
# In homepage, y is around 1340..1420
cs1 = hp.crop((135, 1340, 205, 1405))
cs1.save('public/assets/case-study-1.png')

cs2 = hp.crop((325, 1340, 380, 1405))
cs2.save('public/assets/case-study-2.png')

cs3 = hp.crop((505, 1340, 565, 1405))
cs3.save('public/assets/case-study-3.png')

cs4 = hp.crop((695, 1340, 745, 1405))
cs4.save('public/assets/case-study-4.png')

print("Assets extracted successfully!")
