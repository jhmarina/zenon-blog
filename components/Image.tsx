import NextImage, { ImageProps } from 'next/image'

const Image = ({ ...rest }: ImageProps) => <img {...rest} />

export default Image
