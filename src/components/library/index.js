import Skeleton from '@/components/library/Skeleton'
import Carousel from '@/components/library/Carousel'
import More from '@/components/library/More'

export default {
  install (app) {
    app.component(Skeleton.name, Skeleton)
    app.component(Carousel.name, Carousel)
    app.component(More.name, More)
  }
}
