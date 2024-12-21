import cv2
from gui import start_gui
from hand_detector import HandDetector
from model_prediction import YOLOModel

# Initialize Hand Detector and YOLO Model
hand_detector = HandDetector(max_hands=1)
model = YOLOModel(r'C:\SFU folder\SFU\Fall 2024\IAT 360\Projects\Computer Vision\best.pt')

def main():
    # Start GUI
    start_gui(hand_detector, model)

if __name__ == "__main__":
    main()
