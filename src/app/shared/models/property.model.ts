import { IndexableObject } from './indexable-object.model';

export interface rawProperties {
	properties: Property[]
}

export interface Property {
	_id:         string,
	title:       string,
	address:     string,
	location:    Location,
	currency:    string,
	price:       number,
	description: string,
	isFavorite:  boolean,
	tags:        string[],
	features:    Features,
}

export interface Location {
	latitude:  string,
	longitude: string,
}
export interface PropertyImages {
	propertyId: string,
	images: string[],
}

export interface Features {
	propertyType:   string,
	levels:         number,
	lotSize:        number,
	garage:         number,
	rooms:          number,
	bathrooms:      number,
	airConditioner: boolean,
	terrace:        boolean,
	garden:         boolean,
	serviceRoom:    boolean,
	warehouse:      boolean,
	security:       boolean,
}

export const ReadableFeatures: IndexableObject = {
	propertyType: 'Tipo de propiedad',
	levels: 'Niveles',
	lotSize: 'Tamaño de lote',
	garage: 'Cochera',
	rooms: 'Habitaciones',
	bathrooms: 'Baños',
	airConditioner: 'Aire acondicionado',
	terrace: 'Terraza',
	garden: 'Jardín',
	serviceRoom: 'Cuarto de servicio',
	warehouse: 'Bodega',
	security: 'Seguridad',
}