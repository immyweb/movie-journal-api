import Movie from "./movie-model";

describe('Movie model', () => {
  describe('schema', () => {
    test('theMovieDbId', () => {
      const name = Movie.schema.obj.theMovieDbId
      expect(name).toEqual({
        type: Number,
        required: true
      })
    })

    test('title', () => {
      const name = Movie.schema.obj.title
      expect(name).toEqual({
        type: String,
        required: true
      })
    })

    test('dateWatched', () => {
      const name = Movie.schema.obj.dateWatched
      expect(name).toEqual({
        type: String,
        required: true
      })
    })

    test('rating', () => {
      const name = Movie.schema.obj.rating
      expect(name).toEqual({
        type: Number,
        required: true
      })
    })

    test('review', () => {
      const name = Movie.schema.obj.review
      expect(name).toEqual({
        type: String,
        required: true
      })
    })

    test('like', () => {
      const name = Movie.schema.obj.like
      expect(name).toEqual({
        type: Boolean,
        required: true
      })
    })

    test('posterImg', () => {
      const name = Movie.schema.obj.posterImg
      expect(name).toEqual({
        type: String,
        required: false
      })
    })

    test('releaseDate', () => {
      const name = Movie.schema.obj.releaseDate
      expect(name).toEqual({
        type: String,
        required: false
      })
    })
  })
})
