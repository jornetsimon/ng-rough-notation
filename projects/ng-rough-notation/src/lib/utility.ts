import { RoughAnnotationType } from 'rough-notation/lib/model';
import { RoughAnnotationConfig } from './rough-annotation-config';

export const defaultColors: Record<RoughAnnotationType, string> = {
	highlight: '#FFF176',
	circle: '#0D47A1',
	box: '#4A148C',
	'strike-through': '#1B5E1F',
	underline: '#B71C1B',
	'crossed-off': '#F57F17',
	bracket: '#FF0000',
};
export const getDefaultTypeColor = (type: RoughAnnotationType): string => {
	return defaultColors[type];
};

export const defaultConfig: RoughAnnotationConfig = {
	type: 'highlight',
	color: getDefaultTypeColor('highlight'),
};
