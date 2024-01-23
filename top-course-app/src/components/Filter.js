function Filter({filterData, category, setCategory}){

    function categoryHandler(title){
        setCategory(title);
        console.log("cate is " , category);
    }

    return (
        <div className="btn">
            {filterData.map( (data) => {
                return (
                    <button className= {category === data.title ? "filter-btn-1" : "filter-btn"} key={data.id} onClick={()=> categoryHandler(data.title)}>
                        {data.title}
                    </button>
                );
            })}
        </div>
    );
}

export default Filter;