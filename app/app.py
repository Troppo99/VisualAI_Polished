# app.py
from flask import Flask, render_template, Response
from video_feed import generate_frames
from sources.brooming_detection import BroomDetector

app = Flask(__name__)

# Inisialisasi detektor
detector = BroomDetector(
    confidence_threshold=0.5,
    camera_name="OFFICE1",
    video_source="videos/bd_test.mp4",
    window_size=(320, 240),
)


@app.route("/")
def index():
    return render_template("index.html")


@app.route("/video_feed")
def video_feed():
    return Response(generate_frames(detector), mimetype="multipart/x-mixed-replace; boundary=frame")


if __name__ == "__main__":
    app.run(debug=True, host="0.0.0.0")
