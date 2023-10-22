import { data } from "../../../_data/db";
import { SectionHeader } from "../SectionHeader";
import { PostList } from "../PostList";

export function Blog() {
  return (
    <section className="section" id="blog">
      <div className="container mx-auto">
        <SectionHeader pretitle="Our Blog" title="Latest News" />
        <PostList posts={data.posts} />
      </div>
    </section>
  );
}
