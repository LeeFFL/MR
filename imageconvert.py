import numpy as np
import cv2
img =cv2.imread('testimg2.PNG',cv2.IMREAD_GRAYSCALE)
resized = cv2.resize(img,(128,128))
cv2.imwrite('test2.PNG',resized)

