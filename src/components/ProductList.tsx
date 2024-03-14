import { useEffect, useState } from "react";

export function ProductList() {
  const [product, setProduct] = useState([]);
  useEffect(() => {
    fetch("http://localhost:3000/product")
      .then((res) => {
        return res.json();
      })
      .then((data: any) => {
        setProduct(data);
      });
  }, []);

  return (
    <>
      <section className="bg-light">
        <div className="container py-5">
          <div className="row text-center py-3">
            <div className="col-lg-6 m-auto">
              <h1 className="h1">Featured Product</h1>
              <p>
                Reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident.
              </p>
            </div>
          </div>
          <div className="row">
            {product &&
              product.length &&
              product.map((item: any) => {
                return (
                  <div className="col-12 col-md-4 mb-4">
                    <div className="card h-100">
                      <a href="shop-single.html">
                        <img
                          src={item.image}
                          className="card-img-top"
                          alt="..."
                        />
                      </a>
                      <div className="card-body">
                        <ul className="list-unstyled d-flex justify-content-between">
                          <li>
                            <i className="text-warning fa fa-star" />
                            <i className="text-warning fa fa-star" />
                            <i className="text-warning fa fa-star" />
                            <i className="text-muted fa fa-star" />
                            <i className="text-muted fa fa-star" />
                          </li>
                          <li className="text-muted text-right">
                            ${item.price}
                          </li>
                        </ul>
                        <a
                          href="shop-single.html"
                          className="h2 text-decoration-none text-dark"
                        >
                          {item.title}
                        </a>
                        <p className="card-text">{item.desc}</p>
                        <p className="text-muted">Reviews {item.review}</p>
                      </div>
                    </div>
                  </div>
                );
              })}
          </div>
        </div>
      </section>
    </>
  );
}
