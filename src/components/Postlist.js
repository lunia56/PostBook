import React from "react";
import { Post } from "./Post";



const Postlist = ({ posts, title }) => {

    return (
        <div>
            <h1 style={{ textAlign: "center" }}>{title}</h1>
            {/* инлайн стили пишутся в камел кейсе */}
            {
                posts.map(post =>
                    <div>
                        {/* Тут мы  генерируем посты методом .map и(создаем элементт и передаем в него пропс - обьект, который хранится в состоянии) */}
                        <Post post={post} key={post.id} />
                    </div>
                )
            }
        </div>
    )
}

export default Postlist;