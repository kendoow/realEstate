/// <reference types="react-scripts" />
declare module 'react-slick' // без этого слайдер не работает
declare module 'react-scroll' 
declare module "*.svg" {
	const content: React.FunctionComponent<React.SVGAttributes<SVGAElement>>;
	export default content;
}