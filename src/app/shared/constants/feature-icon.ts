import { 
	faBed, faBoxes, faBroom, faBuilding, faCar, faLeaf, faLevelUpAlt, 
	faRulerCombined, faShower, faSnowflake, faUmbrellaBeach, faUserShield
} from '@fortawesome/free-solid-svg-icons';
import { IndexableObject } from '../models/indexable-object.model';

export const FeatureIcon: IndexableObject = {
	propertyType: faBuilding,
	levels: faLevelUpAlt,
	lotSize: faRulerCombined,
	garage: faCar,
	rooms: faBed,
	bathrooms: faShower,
	airConditioner: faSnowflake,
	terrace: faUmbrellaBeach,
	garden: faLeaf,
	serviceRoom: faBroom,
	warehouse: faBoxes,
	security: faUserShield,
}