from collections import deque, Counter

# Rolling window of recent emotions
emotion_window = deque(maxlen=3)

def smooth_emotion(new_emotion: str) -> str:
    """
    Smoothing is disabled because the frontend now polls every 8 seconds
    and has its own internal 3-count trigger for actions.
    """
    if not new_emotion:
        return "neutral"
    return new_emotion
