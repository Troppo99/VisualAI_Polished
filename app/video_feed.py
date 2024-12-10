# video_feed.py
import cv2
from flask import Response
from sources.brooming_detection import BroomDetector


def generate_frames(detector):
    while True:
        frame = detector.get_current_frame()  # Buat method yang mengembalikan frame saat ini
        if frame is None:
            continue
        # Encode frame ke jpeg
        ret, buffer = cv2.imencode(".jpg", frame)
        frame = buffer.tobytes()
        # Kirim frame sebagai bagian dari MJPEG stream
        yield (b"--frame\r\n" b"Content-Type: image/jpeg\r\n\r\n" + frame + b"\r\n")
