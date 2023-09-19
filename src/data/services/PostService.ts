import { ref, type Ref } from 'vue';
import type { IPost }  from '../interfaces/IPost';

class PostService {
    private posts: Ref<Array<IPost>>;

    constructor() {
        this.posts = ref<Array<IPost>>([])
    }

    getPosts(): Ref<Array<IPost>> {
        return this.posts
    }

    async fetchAll(): Promise<void> {
        try {
            const url = `https://jsonplaceholder.typicode.com/posts`;
            const response = await fetch(url);
            const json = await response.json();
            this.posts.value = await json;
        } catch (error) {
            throw new Error('ocurrio un error');
        }
    }
}

export default PostService;