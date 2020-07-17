import { User } from './User'
import { Company } from './Company'
import { CustomMap } from './costumMap'

const user = new User();
const company = new Company();
const customMap = new CustomMap('map')
customMap.getUserMarker(user)
customMap.getCompanyMarker(company)
