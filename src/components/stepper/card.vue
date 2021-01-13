<template>
    <div id="card">
        <section class="design-process-section" id="process-tab">
            <div class="container">
                <div class="row">
                    <div class="col-xs-12"> 
                        <!-- stepper header -->
                        <ul class="nav nav-tabs process-model more-icon-preocess" role="tablist">
                            <!-- dynmic active needed -->
                        <li role="presentation" v-for="item in header" :key="header.indexOf(item)">
                            <a href="#discover" aria-controls="discover" role="tab" data-toggle="tab">
                                <i class="fa fa-search" aria-hidden="true"></i>
                                <p>Discover</p>
                            </a>
                        </li>
                        </ul>
                        <!-- end stepper header--> 
                        <!-- Tab panes -->
                        <div class="tab-content">
                        <div role="tabpanel" class="tab-pane active" id="discover">
                            <div class="design-process-content">
                            <h3 class="semi-bold">Discovery</h3>
                            <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincid unt ut laoreet dolore magna aliquam erat volutpat</p>
                            </div>
                        </div>
                        <div role="tabpanel" class="tab-pane" id="strategy">
                            <div class="design-process-content">
                            <h3 class="semi-bold">Strategy</h3>
                            <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincid unt ut laoreet dolore magna aliquam erat volutpat</p>
                            </div>
                        </div>
                        <div role="tabpanel" class="tab-pane" id="optimization">
                            <div class="design-process-content">
                            <h3 class="semi-bold">Optimization</h3>
                            <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincid unt ut laoreet dolore magna aliquam erat volutpat</p>
                            </div>
                        </div>
                        <div role="tabpanel" class="tab-pane" id="content">
                            <div class="design-process-content">
                            <h3 class="semi-bold">Content</h3>
                            <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincid unt ut laoreet dolore magna aliquam erat volutpat</p>              
                            </div>
                        </div>
                        <div role="tabpanel" class="tab-pane" id="reporting">
                            <div class="design-process-content">
                            <h3>Reporting</h3>
                            <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincid unt ut laoreet dolore magna aliquam erat volutpat. </p>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
        </section>
    </div>
</template>

<script>
export default {
    name: 'card',
    props: {
        header: {
            type: Array,
            default: [
                {icon: '', title: ''},
                {icon: '', title: ''},
                {icon: '', title: ''},
                {icon: '', title: ''}
            ]
        },
        content: {
            type: Array,
            default: [
                
            ]
        }
    }
}
</script>

<style>

</style>