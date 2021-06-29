import ProductOption from './ProductOption'
import PaginationButtons from './Pagination'

const Product = () => {
    return (
        <div className='grid grid-cols-2 lg:grid-cols-4 md:grid-cols-3 gap-5 mt-20'>
            <ProductOption
            id='12344'
            image='/Salmon.jpg'
            name='Salmon fish'
            price='234.56'
            count='1'
            />
            <ProductOption
            id='5656' 
            image='/codfillet.jpg'
            name='Cidfillet'
            price='455'
            count = '1'
            />
            <ProductOption
            id='723673' 
            image='/cream.jpg'
            name='Custard Cream'
            price='15'
            count = '1'
            />
            <ProductOption
            id='33337' 
            image='/digestives.jpg'
            name='Digestive'
            price='24'
            count = '1'
            />
            <ProductOption
            id='2733' 
            image='/mango.jpg'
            name=''
            price='234'
            count = '1'
            />
            <ProductOption
            id='33443' 
            image='/Salmon.jpg'
            name='Salmon fish'
            price='234'
            count = '1'
            />
            <ProductOption
            id='84748' 
            image='/Salmon.jpg'
            name='fish'
            price='234'
            count = '1'
            />
            <ProductOption
            id='8737637' 
            image='/Salmon.jpg'
            name='Salmon fish'
            price='234'
            count = '1'
            />
            <ProductOption
            id='87476437' 
            image='/Salmon.jpg'
            name='Salmon fish'
            price='234'
            count = '1'
            />
            <ProductOption
            id='67373' 
            image='/Salmon.jpg'
            name='Salmon fish'
            price='234'
            count = '1'
            />
            <ProductOption
            id='874737' 
            image='/Salmon.jpg'
            name='Salmon fish'
            price='234'
            count = '1'
            />
            <ProductOption
            id='83737' 
            image='/Salmon.jpg'
            name='Salmon fish'
            price='234'
            count = '1'
            />
            <PaginationButtons />
        </div>
    )
}

export default Product