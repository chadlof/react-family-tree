import FamilyMemberPage from '../components/WOStepChild'


const info = {
    marriageDate: 'TBD - A Long time ago',
    familyMember: {
        name: 'Robert William Lofgren ',
        birthDate: '02/03/1932'
    },
    spouse: {
        name: 'Deloris Ann Lofgren ',
        birthDate: '12/15/1933'
    },
    children: [
        { name: 'Kenneth R Lofgren', href: '/ken'},
        { name: 'Vernon Alan Lofgren', href:'/vern' },
        { name: 'Karen Ann Germscheid', href:'/karen' },
        { name: 'Kathryn Renee "Lofgren" Gruber ', href:'/kathy' },
        { name: 'Tammy Marie Lofgren', href:'/tammy' }
    ],
    stepChildren: [
        { name: null  }
    ]
}

export default function() {
    return (
        <FamilyMemberPage mydata={info} />
    )
}

