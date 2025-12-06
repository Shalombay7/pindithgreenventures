import React, { useState } from 'react';
import { Share2, Facebook, Twitter, Linkedin, Link2, Check } from 'lucide-react';

export const ShareWidget: React.FC = () => {
  const [copied, setCopied] = useState(false);
  const url = window.location.href;
  const title = "Check out PinDith Green Ventures for premium rabbits and poultry!";

  const handleCopy = () => {
    navigator.clipboard.writeText(url);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const shareLinks = [
    {
      name: 'Facebook',
      icon: Facebook,
      url: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`,
      color: 'hover:text-blue-600'
    },
    {
      name: 'Twitter',
      icon: Twitter,
      url: `https://twitter.com/intent/tweet?text=${encodeURIComponent(title)}&url=${encodeURIComponent(url)}`,
      color: 'hover:text-sky-500'
    },
    {
      name: 'LinkedIn',
      icon: Linkedin,
      url: `https://www.linkedin.com/shareArticle?mini=true&url=${encodeURIComponent(url)}&title=${encodeURIComponent(title)}`,
      color: 'hover:text-blue-700'
    }
  ];

  return (
    <div className="flex flex-col gap-3">
      <h4 className="text-sm font-semibold uppercase tracking-wider text-pindith-100">Share PinDith</h4>
      <div className="flex items-center gap-4">
        {shareLinks.map((link) => (
          <a
            key={link.name}
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            className={`text-gray-400 transition-colors ${link.color}`}
            aria-label={`Share on ${link.name}`}
          >
            <link.icon className="w-5 h-5" />
          </a>
        ))}
        <button
          onClick={handleCopy}
          className="text-gray-400 hover:text-white transition-colors"
          title="Copy Link"
        >
          {copied ? <Check className="w-5 h-5 text-green-500" /> : <Link2 className="w-5 h-5" />}
        </button>
      </div>
    </div>
  );
};