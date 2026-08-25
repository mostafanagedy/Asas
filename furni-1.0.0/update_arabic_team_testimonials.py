import re

testimonial_html = '''		<!-- Start Testimonial Slider -->
		<div class="testimonial-section before-footer-section">
			<div class="container">
				<div class="row">
					<div class="col-lg-7 mx-auto text-center">
						<h2 class="section-title">آراء العملاء</h2>
					</div>
				</div>

				<div class="row justify-content-center">
					<div class="col-lg-12">
						<div class="testimonial-slider-wrap text-center">

							<div id="testimonialCarousel" class="carousel slide" data-bs-ride="carousel">
								
								<div class="carousel-indicators" style="bottom: -50px;">
									<button type="button" data-bs-target="#testimonialCarousel" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1" style="background-color: #3b5d50; width: 10px; height: 10px; border-radius: 50%;"></button>
									<button type="button" data-bs-target="#testimonialCarousel" data-bs-slide-to="1" aria-label="Slide 2" style="background-color: #3b5d50; width: 10px; height: 10px; border-radius: 50%;"></button>
									<button type="button" data-bs-target="#testimonialCarousel" data-bs-slide-to="2" aria-label="Slide 3" style="background-color: #3b5d50; width: 10px; height: 10px; border-radius: 50%;"></button>
								</div>

								<div class="carousel-inner pb-5">
									
									<div class="carousel-item active">
										<div class="row justify-content-center">
											<div class="col-lg-8 mx-auto">
												<div class="testimonial-block text-center">
													<blockquote class="mb-5">
														<p>&ldquo;تجربتي مع هذا المتجر كانت استثنائية. جودة الأثاث ممتازة والتصميمات عصرية جداً، بالإضافة إلى أن خدمة العملاء كانت سريعة ومتعاونة.&rdquo;</p>
													</blockquote>
													<div class="author-info">
														<div class="author-pic">
															<img src="images/person-1.png" alt="أحمد محمد" class="img-fluid">
														</div>
														<h3 class="font-weight-bold">أحمد محمد</h3>
														<span class="position d-block mb-3">مهندس ديكور</span>
													</div>
												</div>
											</div>
										</div>
									</div> 

									<div class="carousel-item">
										<div class="row justify-content-center">
											<div class="col-lg-8 mx-auto">
												<div class="testimonial-block text-center">
													<blockquote class="mb-5">
														<p>&ldquo;أفضل مكان لشراء الأثاث المودرن! الخامات المستخدمة عالية الجودة والأسعار تنافسية مقارنة بالسوق. أنصح الجميع بالتعامل معهم.&rdquo;</p>
													</blockquote>
													<div class="author-info">
														<div class="author-pic">
															<img src="images/person-1.png" alt="سارة خالد" class="img-fluid">
														</div>
														<h3 class="font-weight-bold">سارة خالد</h3>
														<span class="position d-block mb-3">ربة منزل</span>
													</div>
												</div>
											</div>
										</div>
									</div> 

									<div class="carousel-item">
										<div class="row justify-content-center">
											<div class="col-lg-8 mx-auto">
												<div class="testimonial-block text-center">
													<blockquote class="mb-5">
														<p>&ldquo;التوصيل كان في الموعد المحدد، والمنتجات مطابقة تماماً للصور الموجودة على الموقع. كانت تجربة تسوق رائعة وسأكررها بالتأكيد.&rdquo;</p>
													</blockquote>
													<div class="author-info">
														<div class="author-pic">
															<img src="images/person-1.png" alt="محمود طارق" class="img-fluid">
														</div>
														<h3 class="font-weight-bold">محمود طارق</h3>
														<span class="position d-block mb-3">صاحب شركة</span>
													</div>
												</div>
											</div>
										</div>
									</div> 

								</div>
								
								<button class="carousel-control-prev" type="button" data-bs-target="#testimonialCarousel" data-bs-slide="prev" style="width: 5%;">
									<span class="fa fa-chevron-left" aria-hidden="true" style="color: #3b5d50; font-size: 1.5rem; background: rgba(0,0,0,0.05); border-radius: 50%; width: 50px; height: 50px; display: flex; align-items: center; justify-content: center;"></span>
									<span class="visually-hidden">السابق</span>
								</button>
								<button class="carousel-control-next" type="button" data-bs-target="#testimonialCarousel" data-bs-slide="next" style="width: 5%;">
									<span class="fa fa-chevron-right" aria-hidden="true" style="color: #3b5d50; font-size: 1.5rem; background: rgba(0,0,0,0.05); border-radius: 50%; width: 50px; height: 50px; display: flex; align-items: center; justify-content: center;"></span>
									<span class="visually-hidden">التالي</span>
								</button>

							</div>

						</div>
					</div>
				</div>
			</div>
		</div>
		<!-- End Testimonial Slider -->
'''

# 1. Update about.html
with open('about.html', 'r', encoding='utf-8') as f:
    about_content = f.read()

# Replace team section in about.html
team_old_pattern = re.compile(r'<!-- Start Team Section -->.*?<!-- End Team Section -->', re.DOTALL)
team_arabic_html = '''<!-- Start Team Section -->
		<div class="untree_co-section">
			<div class="container">

				<div class="row mb-5">
					<div class="col-lg-5 mx-auto text-center">
						<h2 class="section-title">فريقنا</h2>
					</div>
				</div>

				<div class="row">

					<!-- Start Column 1 -->
					<div class="col-12 col-md-6 col-lg-3 mb-5 mb-md-0">
						<img src="images/person_1.jpg" class="img-fluid mb-5 rounded">
						<h3><a href="#">أحمد محمود</a></h3>
						<span class="d-block position mb-4">المدير التنفيذي والمؤسس</span>
						<p>خبرة أكثر من 15 عاماً في تصميم وتصنيع الأثاث العصري وإدارة وتطوير المشاريع.</p>
						<p class="mb-0"><a href="#" class="more dark">اعرف المزيد <span class="icon-arrow_forward"></span></a></p>
					</div> 
					<!-- End Column 1 -->

					<!-- Start Column 2 -->
					<div class="col-12 col-md-6 col-lg-3 mb-5 mb-md-0">
						<img src="images/person_2.jpg" class="img-fluid mb-5 rounded">
						<h3><a href="#">محمد علي</a></h3>
						<span class="d-block position mb-4">مدير التصميم والديكور</span>
						<p>متخصص في الابتكار والتصميم الداخلي واستغلال المساحات بأعلى كفاءة وجمالية.</p>
						<p class="mb-0"><a href="#" class="more dark">اعرف المزيد <span class="icon-arrow_forward"></span></a></p>
					</div> 
					<!-- End Column 2 -->

					<!-- Start Column 3 -->
					<div class="col-12 col-md-6 col-lg-3 mb-5 mb-md-0">
						<img src="images/person_3.jpg" class="img-fluid mb-5 rounded">
						<h3><a href="#">يوسف حسن</a></h3>
						<span class="d-block position mb-4">مدير جودة التصنيع</span>
						<p>يشرف على اختيار أفضل أنواع الخشب والخامات لضمان متانة وجودة كل قطعة أثاث.</p>
						<p class="mb-0"><a href="#" class="more dark">اعرف المزيد <span class="icon-arrow_forward"></span></a></p>
					</div> 
					<!-- End Column 3 -->

					<!-- Start Column 4 -->
					<div class="col-12 col-md-6 col-lg-3 mb-5 mb-md-0">
						<img src="images/person_4.jpg" class="img-fluid mb-5 rounded">
						<h3><a href="#">سارة أحمد</a></h3>
						<span class="d-block position mb-4">مديرة خدمة العملاء</span>
						<p>تسعى دائماً لتقديم أفضل تجربة تسوق لعملائنا ومتابعة طلباتهم حتى التسليم بنجاح.</p>
						<p class="mb-0"><a href="#" class="more dark">اعرف المزيد <span class="icon-arrow_forward"></span></a></p>
					</div> 
					<!-- End Column 4 -->

				</div>
			</div>
		</div>
		<!-- End Team Section -->'''

about_content = team_old_pattern.sub(team_arabic_html, about_content)

# Replace testimonial section in about.html
testimonial_old_pattern = re.compile(r'<!-- Start Testimonial Slider -->.*?<!-- End Testimonial Slider -->', re.DOTALL)
about_content = testimonial_old_pattern.sub(testimonial_html, about_content)

with open('about.html', 'w', encoding='utf-8') as f:
    f.write(about_content)

# 2. Update all other pages for testimonials
pages = ['services.html', 'blog.html', 'shop.html', 'contact.html', 'cart.html', 'checkout.html']

for page in pages:
    with open(page, 'r', encoding='utf-8') as f:
        content = f.read()
    
    if '<!-- Start Testimonial Slider -->' in content:
        content = testimonial_old_pattern.sub(testimonial_html, content)
    else:
        # Insert before footer section if not present
        if '<footer class="footer-section">' in content:
            content = content.replace('<footer class="footer-section">', testimonial_html + '\n\n\t\t<footer class="footer-section">')
            
    with open(page, 'w', encoding='utf-8') as f:
        f.write(content)

print("Updated team and testimonials across all pages successfully!")
