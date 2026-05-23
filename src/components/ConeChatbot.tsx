import { useState } from 'react';
import { MessageCircle, Send, X } from 'lucide-react';

const suggestions = ['Find my flavor', 'Party tub sizes', 'Nearest store'];

export default function ConeChatbot() {
  const [open, setOpen] = useState(false);

  return (
    <div className="cone-chatbot">
      {open && (
        <div className="chat-card glass-panel" role="dialog" aria-label="Creamella flavor assistant">
          <div className="flex items-start justify-between gap-4">
            <div>
              <p className="font-label text-xs uppercase text-lime-dark">Creamella Concierge</p>
              <h3 className="mt-1 font-display text-2xl font-bold text-[#171712]">Need a scoop match?</h3>
            </div>
            <button className="chat-close" type="button" aria-label="Close chat" onClick={() => setOpen(false)}>
              <X size={16} />
            </button>
          </div>
          <p className="mt-3 text-sm leading-relaxed text-[#3C3529]">
            Tell me your mood and I will point you to a cup, cone, tub, or fruity bar.
          </p>
          <div className="mt-4 flex flex-wrap gap-2">
            {suggestions.map((item) => (
              <button key={item} className="chat-chip" type="button">
                {item}
              </button>
            ))}
          </div>
          <form className="chat-input mt-4" onSubmit={(event) => event.preventDefault()}>
            <label className="sr-only" htmlFor="creamella-chat">Ask Creamella</label>
            <input id="creamella-chat" placeholder="I want something berry..." />
            <button type="submit" aria-label="Send message">
              <Send size={16} />
            </button>
          </form>
        </div>
      )}
      <button
        className="cone-chatbot-button"
        type="button"
        aria-label={open ? 'Close Creamella chat' : 'Open Creamella chat'}
        onClick={() => setOpen((current) => !current)}
      >
        <img src="/brand/creamella-cone-bot.svg" alt="" />
        <span>
          <MessageCircle size={18} />
        </span>
      </button>
    </div>
  );
}
