import Link from 'next/link'

export default function() {
    return (
      <body>
           <link rel="stylesheet" type="text/css" href="/static/css/styles.css" />

            <section className='familyName'>
                <h1><Link href='/index.js'><a>Lofgren Family Tree</a></Link></h1>
            </section>

            <section className='treeRow1'>
                <div className='row1'>
                    <div className="imgBo treeImgBox">
                         <Link href='./kathy'><a> <img src="static/img/imgPlaceholder.png" alt="Place Holder" width="200px"/></a></Link>
                    </div>
                    <div className='nameBox'>
                        <h3>Kathy</h3>
                    </div>
                </div>
               <div className='row1'>
                    <div className="imgBox treeImgBox">
                        <Link href='./tammy'><a> <img src="static/img/imgPlaceholder.png" alt="Place Holder" width="200px"/></a></Link>
                    </div>
                    <div className='nameBox'>
                        <h3>Tammy</h3>
                    </div>
                </div>
            </section>

            <section className='treeRow2'>
                <div className='row2'>
                    <div className="imgBo treeImgBox">
                        <Link href='./ken'><a> <img src="static/img/imgPlaceholder.png" alt="Place Holder" width="200px"/></a></Link>
                    </div>
                    <div className='nameBoxRow2'>
                        <h3>Kenny</h3>
                    </div>
                </div>
               <div className='row2'>
                    <div className="imgBox treeImgBox">
                        <Link href='./vern'><a> <img src="static/img/imgPlaceholder.png" alt="Place Holder" width="200px"/></a></Link>
                    </div>
                    <div className='nameBoxRow2'>
                        <h3>Vern</h3>
                    </div>
                </div>
                  <div className='row2'>
                    <div className="imgBo treeImgBox">
                       <Link href='./karen'><a> <img src="static/img/imgPlaceholder.png" alt="Place Holder" width="200px"/></a></Link>
                    </div>
                    <div className='nameBoxRow2'>
                        <h3>Karen</h3>
                    </div>
                </div>
            </section>

            <section className='treeRow3'>
                <div className='row3'>
                    <div className="imgBo treeImgBox">
                        <Link href='./bob'><a> <img src="static/img/imgPlaceholder.png" alt="Place Holder" width="200px"/></a></Link>
                    </div>
                    <div className='nameBox'>
                        <h3>Bob</h3>
                    </div>
                </div>
               <div className='row3'>
                    <div className="imgBox treeImgBox">
                        <Link href='./bob'><a> <img src="static/img/imgPlaceholder.png" alt="Place Holder" width="200px"/></a></Link>
                    </div>
                    <div className='nameBox'>
                        <h3>Dee</h3>
                    </div>
                </div>
            </section>



    </body>
    )
}

