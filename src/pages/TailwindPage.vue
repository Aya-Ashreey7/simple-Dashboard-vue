<template>
    <div class="main-container grid grid-cols-4 bg-gray-900 text-gray-300 font-bodyFont px-7">

        <div class="navigation text-right pt-3">
            <div class="title md:text-3xl font-bold text-primary">KORSAT X PARMAGA</div>

            <div class="links  pt-5">
                <div class="link   bg-gray-500 bg-opacity-25 border-r-2">
                    <div class="text font-semibold text-gray-400">Home</div>
                    <div class="icon ml-3 text-xl"><i class='bx bx-home'></i></div>
                </div>

                <div class="link ">
                    <div class="text">About</div>
                    <div class="icon ml-3 text-xl"> <i class='bx bx-help-circle'></i> </div>
                </div>

                <div class="link ">
                    <div class="text">Contact</div>
                    <div class="icon ml-3 text-xl"> <i class='bx bx-envelope'></i> </div>
                </div>
            </div>

        </div>
        <main class="col-span-3 pt-5 pl-5">

            <header class="flex sm:justify-end md:justify-between items-start ">
                <div class="title hidden md:block ">
                    <div class="main-title text-6xl font-bold text-blue-900">Games</div>
                    <div class="sub-title">For Gamers</div>
                </div>

                <div class="user flex justify-end gap-5">
                    <div
                        class="login font-serif text-primary btn hover:bg-primary hover:text-gray-50 transition ease-in-out duration-400">
                        Log in</div>
                    <div
                        class="signup font-serif text-primary btn hover:bg-primary hover:text-gray-50 transition ease-in-out duration-400">
                        Sign up</div>
                </div>
            </header>

            <div class="games">
                <section class="mt-7">
                    <div class="title text-3xl text-yellow-500 font-bold border-b-2 border-yellow-500 mb-2">Latest Games
                    </div>
                    <div class="cards grid md:grid-cols-2 lg:grid-cols-3 gap-3">
                        <div class="card ">
                            <div class="image w-full h-full"><img class="h-full w-full object-cover"
                                    src="../assets/images/assassins-creed-mirage.jpg"></div>

                            <div class="title  ">
                                <div class="main-title font-bold">Assassin's Creed Mirage</div>
                                <div class="sub-title">Developers: Ubisoft</div>
                            </div>

                            <div class="badge ">
                                <span> <i class='bx bxs-star'></i> </span>
                                <span>4.5/5</span>
                            </div>
                        </div>
                        <div class="card ">
                            <div class="image w-full h-full"><img class="h-full w-full object-cover"
                                    src="../assets/images/assassins-creed-mirage.jpg"></div>

                            <div class="title  ">
                                <div class="main-title font-bold">Assassin's Creed Mirage</div>
                                <div class="sub-title">Developers: Ubisoft</div>
                            </div>

                            <div class="badge ">
                                <span><i class='bx bxs-star'></i></span>
                                <span>4.5/5</span>
                            </div>
                        </div>
                        <div class="card ">
                            <div class="image w-full h-full"><img class="h-full w-full object-cover"
                                    src="../assets/images/assassins-creed-mirage.jpg"></div>

                            <div class="title  ">
                                <div class="main-title font-bold">Assassin's Creed Mirage</div>
                                <div class="sub-title">Developers: Ubisoft</div>
                            </div>

                            <div class="badge ">
                                <span><i class='bx bxs-star'></i></span>
                                <span>4.5/5</span>
                            </div>
                        </div>
                    </div>

                </section>

                <section class="mt-7">
                    <div class="title text-3xl text-yellow-500 font-bold border-b-2 border-yellow-500 mb-2">Most Popular
                    </div>
                    <div class="cards">
                        <!-- <div class="card">
                        <div class="image"></div>
                        <div class="title">
                            <div class="main-title"></div>
                            <div class="sub-title"></div>
                        </div>
                    </div> -->
                    </div>
                </section>

                <div class="load-more text-gray-900 bg-secondry-200 flex justify-center p-3 mb-7">
                    <a href="" class="hover:text-white hover:text-2xl transition ease-out duration-400"> Learn
                        More</a>
                </div>
            </div>
        </main>

    </div>
</template>

<script setup lang="ts">

</script>



<style></style>