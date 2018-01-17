import FamilyMemberPage from '../components/FamilyMemberPage'


const info = {
    marriageDate: '5/30/2002',
    familyMember: {
        name: 'Kenneth R Lofgren',
        birthDate: '8/22/1955'
    },
    spouse: {
        name: 'Pamela J Lofgren',
        birthDate: '4/13/1958'
    },
    children: [
        { name: 'Nicole M "Lofgren" Smasal', href: '/ken/nicki'},
        { name: 'Stephanie A "Lofgren" Torson', href:'/ken/steph' },
        { name: 'Christopher R Lofgren', href:'/ken/chris' }
    ],
    stepChildren: [
        { name: 'Darcy "Cropper" Warner', href: '/ken/darcy' },
        { name: 'Adam Cropper', href: '/ken/adam' }
    ]
}

export default function() {
    return (
        <FamilyMemberPage mydata={info} />
    )
}

