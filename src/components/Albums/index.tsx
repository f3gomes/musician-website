import { SectionHeader } from "../SectionHeader";
import { AlbumSlider } from "../AlbumSlider";

export function Albums() {
  return (
    <section id="discography">
      <div className="container mx-auto">
        <SectionHeader pretitle="Discography" title="Popular albums" />
        <AlbumSlider />
      </div>
    </section>
  );
}
