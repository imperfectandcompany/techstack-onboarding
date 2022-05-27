import { useState } from 'react';


export const LikeButton = (likeCount:number) => {

    const [isLiked, setIsliked] = useState("Unliked");
    const [currentLikeCount, setCurrentLikeCount] = useState(likeCount);
    async function updateLike(to: any) {
        setIsliked('Saving');
        await new Promise(resolve => setTimeout(resolve, 300));
        setCurrentLikeCount(isLiked === "Liked" ? likeCount : isLiked === "Unliked" ? likeCount+1 : likeCount);
        setIsliked(to);
    }

    return (
        <>
            <div className="flex flex-row-reverse space-x-3">
                <div className="flex items-center space-x-2 text-xs text-stone-100">
                    <button className={
                        isLiked === 'Unliked' ? 'like unliked' :
                            isLiked === 'Saving' ? 'like saving' :
                                isLiked === 'Liked' ? 'like liked' : ''}
                        onClick={(e) => updateLike(isLiked === 'Unliked' ? 'Liked' : 'Unliked')}>
                        <span className="like-icon like-icon-state" aria-label="state"
                            x-text="state" aria-live="polite">Unliked</span>
                    </button>
                    <div className={isLiked == "Saving" ? "text-stone-700" : "text-stone-300"}>
                    <span className="text-lg font-bold transition">{currentLikeCount}</span>
                    </div>
                </div>
            </div>

        </>
    )
}