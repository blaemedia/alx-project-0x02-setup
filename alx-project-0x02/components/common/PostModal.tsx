import React, { useState } from "react";

interface PostModalProps{
    isOpen: Boolean;
    onClose: () => void;
    onAddPost: (title: string, content: string) => void;
}

export default function PostModal({ isOpen, onClose, onAddPost }: PostModalProps) {
    const [title, setTitle] = useState("");
    const [content, setContent] =useState("");
    
    if (!isOpen) return null;

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (!title.trim() || !content.trim()) return;
        onAddPost(title, content);
        setTitle("");
        setContent("");
        onClose();
    };

    return(
        <div>
            <div>
                <h2>Add a New Post</h2>
                <form action="" onSubmit={handleSubmit}>
                    <div>
                        <input type="text" placeholder="Title" value={title} onChange={(e) => setTitle(e.target.value)} />
                    </div>
                    <div>
                        <textarea name="" placeholder="Content" value={content} onChange={(e) => setContent(e.target.value)} id=""></textarea>
                    </div>
                    <button type="button" onClick = {onClose}>Cancel</button>
                </form>
            </div>
        </div>
    );
}