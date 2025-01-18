import React from 'react'

export default function SideBar(props) {
    return (
        <div className='container my-3'>
            <button className="btn text-white rounded-pill" style={{backgroundColor: props.mode === '#40916c' ? '#40916c' : '#002945'}} type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasExample" aria-controls="offcanvasExample">
                Year 2025-26
            </button>

            <div className={`offcanvas offcanvas-start text-bg-${props.mode}`} tabIndex="-1" id="offcanvasExample" aria-labelledby="offcanvasExampleLabel">
                <div className="offcanvas-header">
                    <h5 className="offcanvas-title" id="offcanvasExampleLabel">Offcanvas</h5>
                    <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                </div>
                <div className="offcanvas-body">
                    <div>
                        Some text as placeholder. In real life you can have the elements you have chosen. Like, text, images, lists, etc.
                    </div>                    
                </div>
            </div>
        </div>
    )
}
