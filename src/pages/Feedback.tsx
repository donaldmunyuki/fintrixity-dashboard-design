import { useState } from "react";
import { MessageSquare, ThumbsUp, ThumbsDown, Star, Send } from "lucide-react";

const feedbackItems = [
  { id: 1, user: "Alex Johnson", message: "The new dashboard is amazing! Love the dark theme.", rating: 5, date: "09 Apr, 2026", type: "positive" },
  { id: 2, user: "Sarah Chen", message: "Would be great to have more chart customization options.", rating: 4, date: "08 Apr, 2026", type: "suggestion" },
  { id: 3, user: "Mike Davis", message: "Transaction export to CSV would be very helpful.", rating: 4, date: "07 Apr, 2026", type: "suggestion" },
  { id: 4, user: "Emma Wilson", message: "Experienced slow loading on mobile. Please optimize.", rating: 2, date: "06 Apr, 2026", type: "negative" },
  { id: 5, user: "James Brown", message: "The wallet feature is exactly what I needed. Great job!", rating: 5, date: "05 Apr, 2026", type: "positive" },
];

export default function Feedback() {
  const [newFeedback, setNewFeedback] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = () => {
    if (newFeedback.trim()) {
      setSubmitted(true);
      setNewFeedback("");
      setTimeout(() => setSubmitted(false), 3000);
    }
  };

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-foreground">Feedback</h1>
        <p className="text-sm text-muted-foreground">See what users are saying and share your thoughts</p>
      </div>

      {/* Submit feedback */}
      <div className="bg-card border border-border rounded-xl p-5">
        <h3 className="text-sm font-semibold text-foreground mb-3">Share your feedback</h3>
        <div className="flex gap-2">
          <input
            type="text"
            placeholder="Type your feedback here..."
            value={newFeedback}
            onChange={(e) => setNewFeedback(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && handleSubmit()}
            className="flex-1 bg-secondary rounded-lg px-3 py-2 text-sm text-foreground placeholder:text-muted-foreground outline-none border border-border focus:border-primary transition-colors"
          />
          <button onClick={handleSubmit} className="bg-primary hover:bg-primary/90 text-primary-foreground px-4 py-2 rounded-lg text-sm font-medium transition-colors flex items-center gap-1.5">
            <Send className="w-4 h-4" /> Send
          </button>
        </div>
        {submitted && <p className="text-xs text-success mt-2">Thank you for your feedback!</p>}
      </div>

      {/* Feedback list */}
      <div className="space-y-3">
        {feedbackItems.map((fb) => (
          <div key={fb.id} className="bg-card border border-border rounded-xl p-4 hover:bg-secondary/30 transition-colors">
            <div className="flex items-start justify-between mb-2">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-full bg-secondary flex items-center justify-center">
                  <MessageSquare className="w-4 h-4 text-muted-foreground" />
                </div>
                <div>
                  <p className="text-sm font-medium text-foreground">{fb.user}</p>
                  <p className="text-xs text-muted-foreground">{fb.date}</p>
                </div>
              </div>
              <div className="flex items-center gap-0.5">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className={`w-3.5 h-3.5 ${i < fb.rating ? "text-yellow-500 fill-yellow-500" : "text-muted-foreground"}`} />
                ))}
              </div>
            </div>
            <p className="text-sm text-foreground/80 mb-3">{fb.message}</p>
            <div className="flex items-center gap-3">
              <button className="flex items-center gap-1 text-xs text-muted-foreground hover:text-success transition-colors">
                <ThumbsUp className="w-3.5 h-3.5" /> Helpful
              </button>
              <button className="flex items-center gap-1 text-xs text-muted-foreground hover:text-destructive transition-colors">
                <ThumbsDown className="w-3.5 h-3.5" /> Not helpful
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
