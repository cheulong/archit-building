import media1 from '/public/assets/images/medias/1.jpg';
import media2 from '/public/assets/images/medias/2.jpg';
import media3 from '/public/assets/images/medias/3.jpg';
import media4 from '/public/assets/images/medias/4.jpg';
import media5 from '/public/assets/images/medias/5.jpg';

export const media = [media1, media2, media3, media4, media5];
export const mediaByIndex = (index: number) => media[index % media.length];
