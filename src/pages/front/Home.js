import { Link } from 'react-router-dom';
import axios from 'axios';
import { useEffect, useState } from 'react';

function Home() {
  const [products, setProducts] = useState([]);

  const getProducts = async () => {
    const productRes = await axios.get(
      `/v2/api/${process.env.REACT_APP_API_PATH}/products/?category=炸物`,
    );
    console.log(productRes);
    setProducts(productRes.data.products);
  };

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <>
      <div className='container'>
        <div className='row flex-md-row-reverse flex-column'>
          <div className='col-md-6'>
            <img
              src='https://images.unsplash.com/photo-1611518040286-9af8ba97ab46?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80'
              width='100%'
              className='object-cover'
              height={400}
              alt='...'
            />
          </div>
          <div className='col-md-6 d-flex flex-column justify-content-center mt-md-0 mt-3'>
            <h2 className='fw-bold'>壽司和刺身，拉麵和定食</h2>
            <h5 className='font-weight-normal text-muted mt-2'>
              我們的廚師們將以精湛的廚藝和用心烹調，為您呈現最道地的日式料理風味。
            </h5>
            <div className='input-group mb-0 mt-4'>
              <input
                type='text'
                className='form-control rounded-0'
                placeholder=''
              />
              <div className='input-group-append'>
                <button
                  className='btn btn-dark rounded-0'
                  type='button'
                  id='search'
                >
                  訂閱優惠
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className='row mt-5'>
          {products?.map((product) => {
            return (
              <div className='col-md-6 mt-md-4' key={product.id}>
                <div className='card border-0 mb-4 position-relative position-relative'>
                  <img
                    src={product.imageUrl}
                    className='card-img-top rounded-0 object-cover'
                    alt='...'
                    height={300}
                  />
                  <div className='card-body p-0'>
                    <h4 className='mb-0 mt-2'>{product.title}</h4>
                    <Link
                      to={`/product/${product.id}`}
                      className='btn btn-outline-dark rounded-0 text-nowrap mt-2'
                    >
                      查看料理
                    </Link>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <div className='bg-light mt-7'>
        <div className='container'>
          <div
            id='carouselExampleControls'
            className='carousel slide'
            data-ride='carousel'
          >
            <div className='carousel-inner'>
              <div className='carousel-item active'>
                <div className='row justify-content-center py-7'>
                  <div className='col-md-8 d-flex'>
                    <img
                      src='https://images.unsplash.com/photo-1490138139357-fc819d02e344?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80'
                      alt=''
                      className='rounded-circle me-5'
                      style={{
                        width: '160px',
                        height: '160px',
                        objectFit: 'cover',
                      }}
                    />
                    <div className='d-flex flex-column'>
                      <p className='h5'>
                        “Lorem ipsum dolor sit amet, consetetur sadipscing
                        elitr, sed diam nonumy eirmod tempor invidunt ut labore
                        et dolore magna aliquyam erat.”
                      </p>
                      <p className='mt-auto text-muted'>
                        Lorem ipsum dolor sit amet.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className='carousel-item'>
                <div className='row justify-content-center py-7'>
                  <div className='col-md-8 d-flex'>
                    <img
                      src='https://images.unsplash.com/photo-1490138139357-fc819d02e344?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80'
                      alt=''
                      className='rounded-circle me-5'
                      style={{
                        width: '160px',
                        height: '160px',
                        objectFit: 'cover',
                      }}
                    />
                    <div className='d-flex flex-column'>
                      <p className='h5'>
                        “Lorem ipsum dolor sit amet, consetetur sadipscing
                        elitr, sed diam nonumy eirmod tempor invidunt ut labore
                        et dolore magna aliquyam erat.”
                      </p>
                      <p className='mt-auto text-muted'>
                        Lorem ipsum dolor sit amet.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className='carousel-item'>
                <div className='row justify-content-center py-7'>
                  <div className='col-md-8 d-flex'>
                    <img
                      src='https://images.unsplash.com/photo-1490138139357-fc819d02e344?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80'
                      alt=''
                      className='rounded-circle me-5'
                      style={{
                        width: '160px',
                        height: '160px',
                        objectFit: 'cover',
                      }}
                    />
                    <div className='d-flex flex-column'>
                      <p className='h5'>
                        “Lorem ipsum dolor sit amet, consetetur sadipscing
                        elitr, sed diam nonumy eirmod tempor invidunt ut labore
                        et dolore magna aliquyam erat.”
                      </p>
                      <p className='mt-auto text-muted'>
                        Lorem ipsum dolor sit amet.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <a
              className='carousel-control-prev'
              href='#carouselExampleControls'
              role='button'
              data-slide='prev'
            >
              <span
                className='carousel-control-prev-icon'
                aria-hidden='true'
              ></span>
              <span className='sr-only'>Previous</span>
            </a>
            <a
              className='carousel-control-next'
              href='#carouselExampleControls'
              role='button'
              data-slide='next'
            >
              <span
                className='carousel-control-next-icon'
                aria-hidden='true'
              ></span>
              <span className='sr-only'>Next</span>
            </a>
          </div>
        </div>
      </div>
      <div className='container my-7'>
        <div className='row'>
          <div className='col-md-4'>
            <img
              src='https://images.unsplash.com/photo-1548689816-c399f954f3dd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2850&q=80'
              alt=''
              style={{ width: '160px', height: '160px', objectFit: 'cover' }}
            />
            <h4 className='mt-4'>Lorem ipsum</h4>
            <p className='text-muted'>
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
              nonumy eirmod tempor invidunt ut labore et dolore magna.
            </p>
          </div>
          <div className='col-md-4'>
            <img
              src='https://images.unsplash.com/photo-1548689816-c399f954f3dd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2850&q=80'
              alt=''
              style={{ width: '160px', height: '160px', objectFit: 'cover' }}
            />
            <h4 className='mt-4'>Lorem ipsum</h4>
            <p className='text-muted'>
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
              nonumy eirmod tempor invidunt ut labore et dolore magna.
            </p>
          </div>
          <div className='col-md-4'>
            <img
              src='https://images.unsplash.com/photo-1548689816-c399f954f3dd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2850&q=80'
              alt=''
              style={{ width: '160px', height: '160px', objectFit: 'cover' }}
            />
            <h4 className='mt-4'>Lorem ipsum</h4>
            <p className='text-muted'>
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
              nonumy eirmod tempor invidunt ut labore et dolore magna.
            </p>
          </div>
        </div>
      </div>
      <div className='bg-light py-7'>
        <div className='container'>
          <div className='row justify-content-center'>
            <div className='col-md-4 text-center'>
              <h3>Lorem ipsum</h3>
              <p className='text-muted'>
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                diam nonumy eirmod.
              </p>
              <button className='btn btn-dark mt-4 rounded-0'>
                Lorem ipsum
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
